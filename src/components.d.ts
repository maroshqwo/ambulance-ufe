/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MkyAmbulanceWlList {
    }
}
declare global {
    interface HTMLMkyAmbulanceWlListElement extends Components.MkyAmbulanceWlList, HTMLStencilElement {
    }
    var HTMLMkyAmbulanceWlListElement: {
        prototype: HTMLMkyAmbulanceWlListElement;
        new (): HTMLMkyAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "mky-ambulance-wl-list": HTMLMkyAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface MkyAmbulanceWlList {
    }
    interface IntrinsicElements {
        "mky-ambulance-wl-list": MkyAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mky-ambulance-wl-list": LocalJSX.MkyAmbulanceWlList & JSXBase.HTMLAttributes<HTMLMkyAmbulanceWlListElement>;
        }
    }
}