it('should return an array with only the even numbers remaining for filterOutOdds()',() => {

    expect(filterOutOdds(5,24,18,133,45,12)).toEqual([24,18,12]);
});

it('should return the minimum value for findMin()', () =>{

    expect(findMin(12,187,4,44,73)).toEqual(4);
});

it('should merge 2 objects and return a new object for mergeObjects()', ()=>{

    const testObj1 = {a:1,b:2,c:3};
    const testObj2 = {animal:'dog',name:'rover',breed:'dalmation'};

    expect(mergeObjects(testObj1,testObj2)).toEqual({a:1,b:2,c:3,animal:'dog',name:'rover',breed:'dalmation'});
});

it('should return an array including the array passed in, followed by all additional arguments doubled for doubleAndReturnArgs()', () => {
    expect(doubleAndReturnArgs([12,3,7,9,24],23,1,14)).toEqual([12,3,7,9,24,46,2,28]);
});

it('should combine two arrays and return a new array with extend()', () => {

    const arr1 = [6,34,7];
    const arr2 = [24, 9, 12];
    expect(extend(arr1,arr2)).toEqual([6,34,7,24,9,12]);
});

it('should add a new key/value pair to an object with addKeyVal()', () => {
    const obj = {name:'dillon',height:'6ft'};
    const key = 'hairColor';
    const val = 'brown';

    expect(addKeyVal(obj,key,val)).toEqual({name:'dillon',height:'6ft',hairColor:'brown'});
});

it('should remove a key from an object with removeKey()', () => {
    const obj = {animal:'cat', name:'Pearl', breed:'ragdoll'};
    const key = 'breed';

    expect(removeKey(obj,key)).toEqual({animal:'cat',name:'Pearl'});

});

it('should combine two objects with combine()', () => {
    const obj1 = {name:'dillon',height:'6ft'};
    const obj2 = {animal:'cat', name:'Pearl', breed:'ragdoll'};

    expect(combine(obj1,obj2)).toEqual({name:'dillon',height:'6ft',animal:'cat', name:'Pearl', breed:'ragdoll'});
});

it('update the value of a key in an object with update()', () => {
    const obj = {name:'dillon',height:'6ft'};
    const key = 'height';
    const val = '4ft';

    expect(update(obj,key,val)).toEqual({name:'dillon',height:'4ft'});
});
