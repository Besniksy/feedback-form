import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FeedbackForm = () => {

    type Inputs = {
        name: string,
        email: string,
        rating: string,
        comments: string,
    };

    const schema = yup.object().shape({
        name: yup.string().min(2).required(),
        email: yup.string().email().required(),
        rating: yup.number().required(),
    });


    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>(
        {
            resolver: yupResolver(schema),
        }
    );
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log({ data });
        // reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />
            {errors.name && <p>{errors.name?.message}</p>}
            <br />
            <input {...register("email")} placeholder="email" type="email" />
            {errors.email && <p>{errors.email?.message}</p>}
            <br />
            <select {...register("rating")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {errors.rating && <p>{errors.rating?.message}</p>}
            <br />
            <input {...register("comments")} />
            <br />
            <input type="submit" />
        </form>
    );
};

export default FeedbackForm;