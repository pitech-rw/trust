'use client'
import React, { createContext, useContext, useState } from 'react'
import Notification from './notification'

interface Notification {
    id: number,
    message: string,
    type: 'success' | 'error' | 'info'
}

interface NotificationContextProps {
    notifications: Notification[],
    addNotification: (message: string, type: 'success' | 'error' | 'info') => void,
    removeNotification: (id: number) => void
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined)

export const NotificationProvider: React.FC<{children: React.ReactNode }> = ({children}) => {
    const [notifications, setNotifications] = useState<Notification[]>([])
    let id = 0

    let addNotification = (message: string, type: 'success' | 'info' | 'error') => {
        setNotifications( prev => [
            ...prev,
            {
                id: id++,
                message,
                type
            }
        ])
    }

    let removeNotification = (id: number) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
    }

    const handleClose = (id: number) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
    }

    return (
        <NotificationContext.Provider value = {{notifications, addNotification, removeNotification}}>
            {children}
            <div>
                {notifications.map(notification => (
                    <Notification
                      key = {notification.id}
                      message = {notification.message}
                      type = {notification.type}
                      onClose={() => handleClose(notification.id)}
                    />))}
            </div>
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext)
    if (!context) {
        throw new Error('useNotification must be used within a provider')
    }
    return context
}