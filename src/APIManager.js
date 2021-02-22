import axios from 'axios'
import { useEffect, useState } from 'react'

export const APIManager = (uri, options) => {
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [dataFetch, setData] = useState(null)
    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true)
                try {
                    const _ = await axios(`https://api.spacexdata.com/v3${uri}`, options).then(response => {
                        console.log(response.status)
                        if (response.status !== 200) {
                            setError(new Error(`API Error: status code ${response.status}`))
                        } else {
                            setData(response.data)
                        }
                    })
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
            fetchData()
        },
        [options, uri],
    )
    return { loading, error, dataFetch }
}