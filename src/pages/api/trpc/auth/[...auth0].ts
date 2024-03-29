import { handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
    // Add custom logic here
    const { user } = session;
    if (user) {
        // Add custom logic here
    }

    return session;
};

export default handleAuth({
    async callback (req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        }
        catch (error) {
            res.status(error.status || 500).end(error.message);
        }

    }
});
