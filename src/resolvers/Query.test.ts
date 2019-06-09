import { removeContextType, newMockInfo } from 'testHelpers'
import { User } from 'generated/prisma-client';

import { Query }from './Query'

describe('Query', () => {
    test('me', () => {
        const resolver = removeContextType(Query.me)

        const mockUser: User = {
            id: 'test_id',
            createdAt: 'test_createdAt',
            updatedAt: 'test_createdAt',
            email: 'test_email',
            passwordDigest: 'test_password',
        }

        const mockCurrentUserFn = jest.fn()
            .mockResolvedValueOnce(mockUser)
            .mockRejectedValueOnce(new Error('Not authorized'))

        const mockContext = {
            getCurrentUser: mockCurrentUserFn,
        }

        const succeed = resolver(undefined, {}, mockContext, newMockInfo())
        expect(mockContext.getCurrentUser).toHaveBeenCalledTimes(1)
        expect(succeed).resolves.toMatchObject(mockUser)

        const failed = resolver(undefined, {}, mockContext, newMockInfo())
        expect(mockContext.getCurrentUser).toHaveBeenCalledTimes(2)
        expect(failed).rejects.toThrowError('Not authorized')
    }) 
});