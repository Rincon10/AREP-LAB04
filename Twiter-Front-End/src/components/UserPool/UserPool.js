import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_10DtAqwVF',
    ClientId: '64utpce9ctk1uul8v3t32gl4cn',
};

export const UserPool = new CognitoUserPool(poolData);
