const AboutFounder = () => {
  return (
    <div className="w-[100vw] bg-primary/50
    flex justify-center items-center px-4 max-xl:py-8">
      <div className="max-w-[1200px] w-full
      flex justify-between items-center gap-x-24
      max-xl:flex-col">
        <img src="/splash_one.jpg"
        className="max-w-[500px] h-full object-cover
        max-xl:max-w-none max-xl:w-full max-xl:max-h-[500px]
        max-xl:rounded-lg max-xl:shadow-md"/>
        <div className="py-6
        flex flex-col justify-center items-start gap-y-4">
          <h3 className='dynamic-subheading font-bold font-title'>About the Founder</h3>
          <p className="text-lg">
            Naya Hamadeh is a highschooler from Dearborn, Michigan who is passionate about the medical field and wants to make a difference. Heart disease has always been a subject that affected her and her family deeply, and after her uncle passed away simply because of not being aware or taking care of his heart disease, it was inevitable that something needed to be done. That was when she decided to found the Hearts for Hope Movement, and after she established that idea it was just a never ending spiral. It was originally only supposed to be a school club, but seeing how interested her peers were and how much of a difference she could make, she decided to make it a worldwide non profit organization. Today, we have about eight branches worldwide and counting, each addition helping more and more to change lives and support our cause.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutFounder