import '@/SCSS/Portfolio/WorkInProgressAlert.scss';

// This will cause this Typescript error: `Type is not assignable to type IconProp`

export default function WorkInProgress() {
  return (

    <>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="info-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
      </svg>

      <div className="alert alert-primary d-flex align-items-center" role="alert">

        

        <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlinkHref="#info-fill" /></svg>

        <div className='message'>
          <p>Please note that some of these projects are still in progress.</p>
        </div>

        <div>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

      </div>

    </>

  );

};
