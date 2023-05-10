import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import styles from "./Button.module.css"
 
export default function Button({type="primary", label="Button"}) {
    return (
     <button className={styles[type]}>{label}</button>
    )
} 