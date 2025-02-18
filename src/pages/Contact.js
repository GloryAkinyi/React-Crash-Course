import Header from "../components/Header";


export default function Contact(){

    return(

        <div>

            <marquee><Header/></marquee>

{/* Form */}

           
           <div class = "container">


            <h3 class="text-center">Create An Account With Us!</h3>

            <form >

                <label htmlFor="fname" class="form-label">FirstName</label>
                <input type="text" class="form-control" placeholder="Enter firtname" required></input>


                <label htmlFor="lname" class="form-label">LastName</label>
                <input type="text" class="form-control" placeholder="Enter lastname" required></input>


                <label htmlFor="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" placeholder="abc@gmail.com" required></input>




                <label htmlFor="password" class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="abc@gmail.com" required></input>


                <label htmlFor="nationality" class="form-label">Nationality :</label>
                <select name="" id="nationality" class="form-select">
                      <option value="choose" disabled="disabled">--Choose nationality--</option>
                      <option value="kenyan">Kenyan</option>
                      <option value="american">American</option>
                      <option value="tanzanian">Tanzanian</option>
                </select>


                <div class="d-grid mt-5">
                    <button class="btn btn-primary">Register</button>
                </div>


            </form>


           </div>


           



        </div>

    )


}