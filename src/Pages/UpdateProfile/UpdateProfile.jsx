
const UpdateProfile = () => {

    return (
        <div className=" min-h-[93vh] flex justify-center items-center bg-gradient-to-r from-[#e7f6fd] to-[#1db2ff]">
            <div className="space-y-10  w-1/2 bg-white pl-96 p-16">
                <h1 className="text-4xl mb-16 text-[#1db2ff]">Personal Info</h1>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold opacity-80">Full Name</h1>
                    <p className="text-lg font-semibold ">Ronty Sarkar</p>
                    <hr className=" border-b-1 border-[#a4dffd] " />
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Email</h1>
                    <p className="text-lg font-semibold ">ronty@gmail.comr</p>
                    <hr className=" border-b-1 border-[#a4dffd] " />
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-bold opacity-80">Photo Url</h1>
                    <p className="text-lg font-semibold ">imgadsgoshgoherhgeihgegu</p>
                    <hr className=" border-b-1 border-[#a4dffd] " />
                </div>
                <button className="btn bg-[#1db2ff] text-[#e7f6fd]">UPDATE PROFILE</button>

            </div>
        </div>
    );
};

export default UpdateProfile;