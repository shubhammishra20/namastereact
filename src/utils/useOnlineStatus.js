import { useEffect, useState } from "react"

const useOnlineStaus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener('Offline', () => {
            setOnlineStatus(false)
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    }, [])
    return onlineStatus
}

export default useOnlineStaus;
