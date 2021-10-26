import printResult from '../';

describe('Тесты утилит: ', () => {
    describe('printResult: ', () => {
        it('если параметр result равен true, функция возвращает GOOD', () => {
            expect(printResult(true)).toBe('GOOD');
        });

        it('если параметр result равен false, функция возвращает BAD', () => {
            expect(printResult(false)).toBe('BAD');
        });
    });
});
