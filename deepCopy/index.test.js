const deepCopy = require('./index.js');

test('deepCopy function exists', () => {
    expect(typeof deepCopy).toEqual('function');
});

test('deepCopy returns a new object deeply copied from the original object', () => {
    const testObj = {
        number: 1,
        bigint: 1n,
        string: "string",
        booleanTrue: true,
        booleanFalse: false,
        null: null,
        regexp: new RegExp(/^\d+$/),
        date: new Date(),
        object: {
            nested: {
                nested: {
                    data: ['a', 'b', 'c']
                }
            }
        },
        array: [[{data:'abc'}, 1]],
    };

    const copied = deepCopy(testObj);

    // 객체의 모든 property를 복사하는지 확인
    expect(copied).toEqual(testObj);

    // 객체의 참조타입 프로퍼티 깊은 복사 확인
    expect(copied.date).not.toBe(testObj.date);
    expect(copied.regexp).not.toBe(testObj.regexp);

    expect(copied.object).not.toBe(testObj.object);
    expect(copied.object.nested).not.toBe(testObj.object.nested);
    expect(copied.object.nested.nested).not.toBe(testObj.object.nested.nested);
    expect(copied.object.nested.nested.data).not.toBe(testObj.object.nested.nested.data);

    expect(copied.array).not.toBe(testObj.array);
    expect(copied.array[0]).not.toBe(testObj.array[0]);
    expect(copied.array[0][0]).not.toBe(testObj.array[0][0]);
});



