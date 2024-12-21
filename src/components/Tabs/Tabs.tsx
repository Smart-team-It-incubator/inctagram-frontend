import React from 'react';
import './tabs.scss'

export interface ButtonProps {
    backgroundColor?: string;
    label: string;
    border?: string
    onClick?: () => void
    primary?: boolean
    disabled?: boolean
}


export const Tabs = ({
                         backgroundColor,
                         label,
                         border,
                         primary = false,
                         disabled = false
                     }: ButtonProps) => {
    const mode = primary ? "tabs--border" : "tabs";
    console.log(disabled)
    return (
        <button
            type="button"
            disabled={disabled}
            className={["tabs", `tabs--${border}`, mode].join(' ')}
        >
            {label}
            <style jsx>{`
              button {
                background-color: ${backgroundColor};
              }
            `}</style>
        </button>
    );
};