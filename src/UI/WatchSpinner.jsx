import { Watch } from  'react-loader-spinner';

const WatchSpinner = () => {
  return (
    <Watch
        height="40"
        width="40"
        radius="44"
        color="#94a3b8"
        ariaLabel="watch-loading"
        wrapperStyle={{justifyContent: 'center', marginBottom: '40px', marginTop: '10px'}}
        visible={true}
    />
  )
}

export default WatchSpinner