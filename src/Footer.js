import './Footer.css'

function Footer({ nome }) {
  return (
    <footer className='bg-dark p-4 fixed-bottom text-center text-white'>
      <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
        <i className='bi bi-facebook fs-3 m-2'></i>
      </a>

      <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
        <i className='bi bi-instagram fs-3 m-2'></i>
      </a>

      <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
        <i className='bi bi-youtube fs-3 m-2'></i>
      </a>

      <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'>
        <i className='bi bi-whatsapp fs-3 m-2'></i>
      </a>

      <h4>
        Desenvolvidor por &copy; <span id='nome'>{nome}</span>
      </h4>
    </footer>
  )
}

export default Footer
