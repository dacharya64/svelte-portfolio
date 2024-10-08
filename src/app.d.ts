// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    interface Platform {
        env: {
            COUNTER: DurableObjectNamespace;
        };
        context: {
            waitUntil(promise: Promise<any>): void;
        };
        caches: CacheStorage & { default: Cache }
    }
    // interface Locals {}
    // interface PageData {}
    // interface Error {}
    // interface Platform {}
}

export async function post(context) {
    const counter = context.platform.env.COUNTER.idFromName("A");
}