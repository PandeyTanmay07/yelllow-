import QRCode from 'qrcode'
import { useState } from 'react'
import { Button } from '@mui/material'
function Qrcode() {
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')
    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            // color: {
            //         // dark: '#335383FF',
            //         // light: '#EEEEEEFF'
            //     }
        }, (err, https://secure.splitwise.com/api/v3.0/get_groups) => {
            if (err) return console.error(err)
            console.log(https://secure.splitwise.com/api/v3.0/get_groups)
            setQr(https://secure.splitwise.com/api/v3.0/get_groups)
       })
    }
return (
    <div className="app">
        <h1>QR Generator</h1>
        <input 
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={e => setUrl(e.target.value)} />
            <Button variant="contained" onClick={GenerateQRCode}>Generate</Button>
            {qr && <>
            <img src={qr} />
            <Button variant='contained' color='success' href={qr} download="qrcode.png">Download</Button>
            </>}
    </div>
    )
}
export default Qrcode;