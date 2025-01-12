import React, {SVGProps} from 'react';

type Props = {
    fillColor?: string;
} & SVGProps<SVGSVGElement>;

export const GoogleIcon = ({fillColor = 'currentColor', ...props}: Props) => (
    <svg fill={'none'} height={"36"} viewBox={"0 0 36 36"} width={"36"} xmlns={"http://www.w3.org/2000/svg"} {...props}>
        <g clipPath={"url(#clip0_3663_9513)"}>
            <path
                d={"M7.8993 14.6468C9.29818 10.4079 13.2817 7.36364 18 7.36364C20.5364 7.36364 22.8273 8.26364 24.6273 9.73636L29.8636 4.5C26.6727 1.71818 22.5818 0 18 0C10.9051 0 4.79662 4.04745 1.85999 9.97504L7.8993 14.6468Z"}
                fill={"#EA4335"}/>
            <path
                d={"M24.0611 27.0189C22.4264 28.0744 20.3491 28.6364 18 28.6364C13.2997 28.6364 9.32869 25.6153 7.91548 21.4018L1.8562 26.0025C4.78919 31.9404 10.8975 36 18 36C22.3993 36 26.603 34.4361 29.7513 31.4994L24.0611 27.0189Z"}
                fill={"#34A853"}/>
            <path
                d={"M29.7513 31.4994C33.0438 28.4282 35.1818 23.8555 35.1818 18C35.1818 16.9364 35.0182 15.7909 34.7727 14.7273H18V21.6818H27.6545C27.1782 24.0204 25.8995 25.8318 24.0611 27.0189L29.7513 31.4994Z"}
                fill={"#4A90E2"}/>
            <path
                d={"M7.91547 21.4018C7.55749 20.3345 7.36364 19.1906 7.36364 18C7.36364 16.8274 7.55165 15.7002 7.8993 14.6468L1.85999 9.97504C0.654881 12.3906 0 15.1131 0 18C0 20.8793 0.667171 23.5953 1.85619 26.0025L7.91547 21.4018Z"}
                fill={"#FBBC05"}/>
        </g>
        <defs>
            <clipPath id={"clip0_3663_9513"}>
                <rect fill={fillColor} height={"36"} width={"36"}/>
            </clipPath>
        </defs>
    </svg>







    // <svg
    //     fill={"none"}
    //     height={"14"}
    //     viewBox={"0 0 16 14"}
    //     width={"16"}
    //     xmlns={"http://www.w3.org/2000/svg"}
    //     {...props}
    // >
    //     <path
    //         d={"M15 6H3.14L6.77 1.64C6.93974 1.43578 7.0214 1.1725 6.99702 0.908077C6.97264 0.643651 6.84422 0.39974 6.64 0.230001C6.43578 0.0602625 6.1725 -0.0213994 5.90808 0.00298028C5.64365 0.02736 5.39974 0.155784 5.23 0.360001L0.23 6.36C0.196361 6.40772 0.166279 6.45786 0.14 6.51C0.14 6.56 0.14 6.59 0.0700002 6.64C0.0246737 6.75466 0.000941121 6.87671 0 7C0.000941121 7.12329 0.0246737 7.24534 0.0700002 7.36C0.0700002 7.41 0.0699999 7.44 0.14 7.49C0.166279 7.54214 0.196361 7.59228 0.23 7.64L5.23 13.64C5.32402 13.7529 5.44176 13.8437 5.57485 13.9059C5.70793 13.9681 5.85309 14.0002 6 14C6.23365 14.0005 6.46009 13.9191 6.64 13.77C6.74126 13.6861 6.82496 13.583 6.88631 13.4666C6.94766 13.3503 6.98546 13.2229 6.99754 13.092C7.00961 12.961 6.99573 12.8289 6.95669 12.7033C6.91764 12.5777 6.8542 12.4611 6.77 12.36L3.14 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6Z"}
    //         fill={fillColor}
    //     />
    // </svg>
);
