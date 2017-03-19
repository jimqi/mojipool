from flask import Flask
from flask import Flask,request,Response
from session import Session
from flask_cors import CORS, cross_origin
from flask import jsonify
import json
import psycopg2

app = Flask(__name__)
CORS(app)

conn = psycopg2.connect(database='mojio', user='maxroach', host='localhost', port=26257)
# Make each statement commit immediately.
conn.set_session(autocommit=True)
cur = conn.cursor()

@app.route("/")
def hello():
    return "Hello World!!"

@app.route('/login', methods = ['POST'])
def login():
    if request.method == 'POST':
        data = {}
	json_dict = request.get_json() # Recieve and then read/extract json data
	password = json_dict["password"]
        username = json_dict["username"]
	print(json_dict)
	cur.execute("SELECT uid From users WHERE username='{username}';".format(username=username))
	#print(cur.fetchall())
	uID = str(cur.fetchall()[0][0])
	print(uID)
	sessionID = Session.create_sessionid()
	insert_session(sessionID,uID)
	data["sessionID"] = sessionID
	data["uID"] = uID
	data["status"] = "true"
	print(data)
        resp = jsonify(data)
        resp.status_code = 200
        return resp

def insert_session(sessionID, userID):
    cur = conn.cursor()
    query = "insert into session(sid,uid) values(\'{sessionid}\', {userid})".format(sessionid=sessionID, userid=userID)
    cur.execute(query)

@app.route('/register', methods = ['POST'])
def register():
	data = {}
        json_dict = request.get_json() # Recieve and then read/extract json data
        password = json_dict["password"]
	username = json_dict["username"]
	cur.execute("insert into users(username,password) values(%s,%s)",(username,password))
	cur.execute("SELECT uid From users WHERE username='{username}';".format(username=username))
	uID = str(cur.fetchall()[0][0])
	print(uID)
	sessionID = Session.create_sessionid()
        insert_session(sessionID,uID)
        data["sessionID"] = sessionID
        data["uID"] = uID
        data["status"] = "true"
        print(data)
        resp = jsonify(data)
        resp.status_code = 200
        return resp


@app.route('/groups', methods = ['POST'])
def create_group():
	data = {}
	json_dict = request.get_json()
	uID = json_dict["uID"]
	groupName = json_dict["groupName"]
	cur.execute("insert into groups(ownerID, groupname) values(%s,%s)", (int(uID),groupName))
	cur.execute("SELECT gid From groups WHERE ownerID={uID};".format(uID=int(uID)))
	gID = str(cur.fetchall()[0][0])
	data["uID"] = uID
    data["status"] = "true"
    data["gid"] = gID
	print(data)
    resp = jsonify(data)
    resp.status_code = 200
    return resp


@app.route('/groups', methods = ['GET'])
def get_groups():
    resp = "TODO"
    resp.status_code = 200
    return resp




@app.route('/groups/members', methods = ['POST'])
def create_member():
    data = {}
    json_dict = request.get_json() # Recieve and then read/extract json data
    username = json_dict["username"]
    groupname = json_dict["groupname"]
    cur.execute("SELECT uid FROM users WHERE username='{username}';".format(username=username))
    uID = int(cur.fetchall()[0][0])

    cur.execute("SELECT gid FROM groups WHERE groupname='{groupname}';".format(groupname=groupname))
    gID = int(cur.fetchall()[0][0])
    cur.execute("INSERT INTO members (uid, gid) VALUES ({uid},{gid});".format(uid=uID,gid=gID))
    data['status'] ="true"
    resp = jsonify(data)
    resp.status_code = 200
    return resp

@app.route('/groups/members', methods = ['GET'])
def get_members():
    resp = "TODO"
    resp.status_code = 200
    return resp

#@app.route('/', methods = ['POST'])





