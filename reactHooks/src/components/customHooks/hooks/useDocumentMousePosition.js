import {useState, useEffect} from 'react'

const useDocumentMousePosition = () => {

    const [mouseOnRange, setMouseOnRange] = useState(false)

    const checkMousePosition = (e) => {
        setMouseOnRange(e?.clientY < 150)
    }

    useEffect(() => {
        document.addEventListener('mousemove', checkMousePosition)

        return () => {
            document.removeEventListener('mousemove', checkMousePosition)
        }
    }, [])

    return mouseOnRange
}

export default useDocumentMousePosition