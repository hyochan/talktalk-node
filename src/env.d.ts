declare module 'dotenv.macro' {
    export const DEBUG: 'true' | undefined;
    export const PORT: string | undefined;
    export const JWT_SECRET: string | undefined;
    export const CS_EMAIL_ADDRESS: string | undefined;
    export const CS_EMAIL_PASSWORD: string | undefined;
    export const PRISMA_ENDPOINT: string | undefined;
}
