const TEST_ACTION = 'TEST_ACTION';

export function testAction(testString) {
    console.log(testString);
    return {
        type: TEST_ACTION,
        payload: testString,
    }
}