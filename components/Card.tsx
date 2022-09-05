import React from "react";

interface CardProps{
    children: React.ReactNode;
}

export function Card ({
    children,
}: CardProps){
    return (
        <>
            <div
                css={{
                    borderWidth : "1px",
                    borderRadius: "5px",
                    backgroundColor: "green",
                    minHeight: "10px"
                }}
            >
                {children}
            </div>
        </>
    );
}