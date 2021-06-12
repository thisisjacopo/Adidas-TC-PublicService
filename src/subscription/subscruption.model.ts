import { ApiProperty } from "@nestjs/swagger";

export class SubscriptionDto{

    //ID
    @ApiProperty({description: 'Id of the specific subscription', type: String})
    id: string;

    //EMAIL
    @ApiProperty({description: 'Email of the specific subscription', type: String, required: true})
    email: string;

    //FIRST NAME
    @ApiProperty({description: 'Name of the specific subscriber', type: String, required: false})
    firstName: string;

    //DATE OF BIRTH
    @ApiProperty({description: 'Date of birth of the subscriber', type: String, required: true})

    //CONSENT 
    @ApiProperty({description: 'Flag for consent of the specific subscriber', type: Boolean, required: true})
    consent: boolean;

    //GENDER
    @ApiProperty({description: 'Gender of the specific subscription', type: String, required: false})
    gender: String; 
}
