export const RunEyeTwo = (model, ims_func, predicts, distance, total_times,failed_index) => {
    const ddpa = 4.6
    return (
        <div style={{
            height: '100vh', width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row'
        }}>
            <div style={{
                height: '100vh',
                width: '50%',
                backgroundColor: 'red',
                justifyContent: 'center',
                fontSize: '18px',
                color: 'white',
                display: 'flex'
            }}>
                {ims_func(total_times % 2 === 0, total_times, distance / ddpa)}
                passed shit = {total_times}
                distance shit = {distance}
            </div>
            <div style={{
                height: '100vh', width: '50%', backgroundColor: 'green', display: 'flex', justifyContent: 'center'
            }}>
                {ims_func(total_times % 2 !== 0, total_times + 5, distance / ddpa)}
            </div>
        </div>)
}