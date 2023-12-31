import React, { ReactNode } from "react";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP & any ) => {
        return  <React.Suspense fallback={<div>Loading...</div>}>
                    <WrappedComponent {...props} />
                </React.Suspense>
    }
}