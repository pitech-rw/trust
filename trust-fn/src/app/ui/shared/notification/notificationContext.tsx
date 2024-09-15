'use client'
import React, { createContext, useCallback, useContext, useState } from 'react'
import Notification from './notification'
import { set } from 'zod'

interface Notification {
    id: number,
    message: string,
    type: 'success' | 'error' | 'info'
}

interface NotificationContextProps {
    notifications: Notification[],
    addNotification: (message: string, type: 'success' | 'error' | 'info', duration?: number) => number,
    removeNotification: (id: number) => void
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined)
const DEFAULT_DURATION=5000

export const NotificationProvider: React.FC<{children: React.ReactNode }> = ({children}) => {
    const [notifications, setNotifications] = useState<Notification[]>([])
    let id = 0

    let addNotification = useCallback((message: string, type: 'success' | 'info' | 'error', duration=DEFAULT_DURATION ) => {
        const newNotification = {
            id: id++,
            message,
            type
        }
        setNotifications( prev => [ ...prev, newNotification ])
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== newNotification.id))
        }, duration)
        return id
    }, [])

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