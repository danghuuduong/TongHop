import React, { useEffect, useState } from 'react'

export default function Avatar_preview() {
    const [avarrttt, setAvatrtt] = useState()
    useEffect(() => {

        return () => {
            avarrttt && URL.revokeObjectURL(avarrttt.create_link_img)
        }

    }, [avarrttt])
    const handleAvatar = (e) => {
        const [Files11] = e.target.files
        Files11.create_link_img = URL.createObjectURL(Files11)
        setAvatrtt(Files11)
        console.log("🙉🍀 __ Files11[0]", Files11)
    }
    return (
        <div>
            <input
                type="file"
                onChange={handleAvatar}
            />
            {
                avarrttt && <img src={avarrttt.create_link_img} alt="hong" />
            }
        </div>
    )
}
