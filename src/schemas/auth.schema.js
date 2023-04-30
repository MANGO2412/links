import {z} from 'zod'

export const signupSchema=z
       .object({
        fullname:z
         .string({
            required_error:"funame is required",
         })
         .min(3,{
            message:"Fullname must be at least 3 characters long"
         }),
        email:z
         .string({
            required_error:"Email is required",
          })
         .email({
            message:"Email is not valid",
         }),
        password1:z
            .string({
                required_error:"Password is required"
            })
            .min(6,{
                message:"password must be at least 6 characteres long",
            }),
        password2: z.string({
            required_error:"password is required"
        })
       }).refine((data)=>data.password1===data.password2,{
         message:"passwords do not match",
         path:["password2"],
       })


export const signinSchema=z.object({
    email:z
      .string({
        required_error:"Email is required",
      })
      .email({
        message:"Email is not valid"
      }),
    password:z
    .string({
        required_error:"password is required",
    })
    .min(8,{
        message:"password must be at least 8 characteres long"
    })  
})