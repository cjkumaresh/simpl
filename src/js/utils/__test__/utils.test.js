import { Utils } from '../utils';

describe('Utils', () => {
    it('arrayToObject() should convery json array as json object', () => {
        const data = [{ name: '1', value: '2' }, { name: 'cj', value: 'good' }];
        expect(Utils.arrayToObject(data)).toEqual({ '1': '2', cj: 'good' });
    });
});
