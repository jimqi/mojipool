from uuid import uuid4

class Session(object):

    @staticmethod
    def create_sessionid():
        return str(uuid4())
