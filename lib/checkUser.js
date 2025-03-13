import { currentUser } from '@clerk/nextjs/server';
import { db } from './prisma';

export const checkUser = async () => {
    const user = await currentUser();
    if (!user)
        return null;

    try {
        const _user = await db.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        });

        if (_user) {
            return _user;
        }
        const userName = `${user.firstName} ${user.lastName}`;
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name: userName,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress
            }
        });
        return newUser;
    } catch (error) {
        console.error('Error in checkUser:', error.message);
    }
};