/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MkyAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface MkyAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface MkyAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface MkyAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMkyAmbulanceWlEditorElement;
}
export interface MkyAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMkyAmbulanceWlListElement;
}
declare global {
    interface HTMLMkyAmbulanceWlAppElement extends Components.MkyAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLMkyAmbulanceWlAppElement: {
        prototype: HTMLMkyAmbulanceWlAppElement;
        new (): HTMLMkyAmbulanceWlAppElement;
    };
    interface HTMLMkyAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLMkyAmbulanceWlEditorElement extends Components.MkyAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMkyAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLMkyAmbulanceWlEditorElement, ev: MkyAmbulanceWlEditorCustomEvent<HTMLMkyAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMkyAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLMkyAmbulanceWlEditorElement, ev: MkyAmbulanceWlEditorCustomEvent<HTMLMkyAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMkyAmbulanceWlEditorElement: {
        prototype: HTMLMkyAmbulanceWlEditorElement;
        new (): HTMLMkyAmbulanceWlEditorElement;
    };
    interface HTMLMkyAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLMkyAmbulanceWlListElement extends Components.MkyAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMkyAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLMkyAmbulanceWlListElement, ev: MkyAmbulanceWlListCustomEvent<HTMLMkyAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMkyAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLMkyAmbulanceWlListElement, ev: MkyAmbulanceWlListCustomEvent<HTMLMkyAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMkyAmbulanceWlListElement: {
        prototype: HTMLMkyAmbulanceWlListElement;
        new (): HTMLMkyAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "mky-ambulance-wl-app": HTMLMkyAmbulanceWlAppElement;
        "mky-ambulance-wl-editor": HTMLMkyAmbulanceWlEditorElement;
        "mky-ambulance-wl-list": HTMLMkyAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface MkyAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface MkyAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: MkyAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface MkyAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: MkyAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "mky-ambulance-wl-app": MkyAmbulanceWlApp;
        "mky-ambulance-wl-editor": MkyAmbulanceWlEditor;
        "mky-ambulance-wl-list": MkyAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mky-ambulance-wl-app": LocalJSX.MkyAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLMkyAmbulanceWlAppElement>;
            "mky-ambulance-wl-editor": LocalJSX.MkyAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLMkyAmbulanceWlEditorElement>;
            "mky-ambulance-wl-list": LocalJSX.MkyAmbulanceWlList & JSXBase.HTMLAttributes<HTMLMkyAmbulanceWlListElement>;
        }
    }
}
