"use client";

import {PublicProfile} from '@/features/publicProfile';

type Props = {
    params: { id: string };
};

export default function PublicProfilePage({ params }: Props) {
    const { id } = params;

    return (
        <PublicProfile userId={id}/>
    );
}