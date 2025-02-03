'use client'

import {SubmitHandler, useForm} from 'react-hook-form';
import React from 'react';
import styles from '@/features/SignUp/signUp.module.scss';
import {Container} from '@/components/shared/Container';
import {FormInput} from '@/components/FormInput/FormInput';
import {Button} from '@/components/Button';
import {useCreatePostMutation} from '@/common/api/posts/postsApi';



export type FormValue2 = {
    text: string
    location: string
    files: FileList
}

export const TestCreatePost = () => {
    const {control, register, formState: { isValid}, trigger, handleSubmit,} = useForm<FormValue2>()

    const [createPost]=useCreatePostMutation()

    const onSubmit: SubmitHandler<FormValue2> = data => {
        createPost(data)
    }

    return (
        <Container className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        className={styles.field}
                        control={control}
                        name={'text'}
                        textPlaceholder={"text"}
                        title={'text'}
                        trigger={trigger}
                        type={'text'}
                    />
                    <FormInput
                        className={styles.field}
                        control={control}
                        name={'location'}
                        title={'location'}
                        trigger={trigger}
                        type={'text'}
                    />
                    <input {...register('files')} type="file"/>
                    <Button
                        className={styles.signUpButton}
                        disabled={!isValid}
                        onClick={handleSubmit(onSubmit)}
                        type={'submit'}
                        variant={'primary'}
                    >
                        Создать пост
                    </Button>
                </form>
            </div>
        </Container>)
}