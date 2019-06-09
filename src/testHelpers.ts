import { GeneratedResolverFn } from 'types';
import { GraphQLResolveInfo } from 'graphql';

type ContextIgnoredResolverType<T> = T extends GeneratedResolverFn<infer TSource, infer TArgs, any, infer TReturn>
    ? GeneratedResolverFn<TSource, TArgs, any, TReturn>
    : never

export function removeContextType<T>(resolver: T) {
    return (resolver as unknown) as ContextIgnoredResolverType<T>
}

export function newMockInfo(): GraphQLResolveInfo {
    return { } as any
}
