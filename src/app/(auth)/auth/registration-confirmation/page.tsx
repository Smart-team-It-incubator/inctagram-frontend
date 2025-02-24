import RegistrationEmailConfirmation from '@/features/RegistrationConfirm/RegistrationConfirmation';

import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<p>Загрузка...</p>}>
            <RegistrationEmailConfirmation />
        </Suspense>
    );
}
