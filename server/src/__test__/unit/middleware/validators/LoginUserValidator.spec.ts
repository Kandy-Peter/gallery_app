import { LoginUserValidationInterface } from "../../../../interfaces/validation/LoginUserInterface";
import { LoginUserValidation } from "../../../../middlewares/validators/LoginUserValidator";

describe('Login User Validator', () => 
{
    

    it('validate user details', async () => 
    {
        let requestBody:LoginUserValidationInterface = {
            email:'',
            password:''
        }
        
        expect(LoginUserValidation(requestBody)).toHaveProperty('errorStatus',true);
  
    });
  

  });