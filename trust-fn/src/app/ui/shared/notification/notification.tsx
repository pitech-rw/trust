import React from 'react'
import styles from './notification.module.css'

interface NotificationProps {
    message: string,
    type: 'success' | 'error' | 'info'
    onClose: () => void
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
    let notificationClass = ''

    switch(type) {
        case 'success':
            notificationClass = styles.success
            break
        case 'info':
            notificationClass = styles.info
            break
        case 'error':
            notificationClass = styles.error
            break
        default:
            notificationClass = ''
    }

    return (
        <div className={`${styles.notification} ${notificationClass}`}>
            <span>{message}</span>
            <button onClick={onClose} className = {styles.closeButton}>
                X
            </button>
        </div>
    )
}

export default Notification