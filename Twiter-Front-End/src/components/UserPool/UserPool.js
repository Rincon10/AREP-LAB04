import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_kUptS4CBE',
    ClientId: '74j62p1v6ul3khvnt63lclfkrk',
};

export const UserPool = new CognitoUserPool(poolData);
