import React from "react"
import { Field, Form, Formik } from "formik";
import { FilterType } from "store/UsersReducer/usersReducer";
import { useSelector } from "react-redux";
import { getUsersFilter } from "store/UsersReducer/usersSelectors";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

// type FormType = {
//     term: string,
//     friend: "true" | "false" | "undefined"
// }

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUsersFilter)


    const submit = (values: FilterType, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void} ) => {
        
        // const filter: FilterType = {
        //     term: values.term,
        //     friend: values.friend === "undefined" ? undefined : values.friend === "true" ? true : false
        // }
        
        props.onFilterChanged(values);
        setSubmitting(false);
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ term: filter.term, friend: (filter.friend)}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="undefined">Все</option>
                            <option value="true">Только Друзья</option>
                            <option value="false">Только не Друзья</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Найти
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default UsersSearchForm