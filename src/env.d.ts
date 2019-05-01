declare module 'dotenv.macro' {
    export const SERVICE_URL: string | undefined;
    export const SERVER_PORT: string | undefined;
    export const JWT_SECRET: string | undefined;

    export const PRISMA_ENDPOINT: string | undefined;

    export const CS_EMAIL_ADDRESS: string | undefined;
    export const SMTP_SERVICE: 'google' | undefined;
    export const SMTP_HOST: string | undefined;
    export const SMTP_PORT: string | undefined;
    export const SMTP_EMAIL_USERNAME: string | undefined;
    export const SMTP_EMAIL_PASSWORD: string | undefined;
}
