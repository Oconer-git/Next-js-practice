'use client'

interface Props {
    error: Error
    
}
const ErrorPage = ({error}: Props) => {
    console.log('Error', error)
    return (
        <div>
        an unexpected error has appeared
        </div>
    )
}

export default ErrorPage
