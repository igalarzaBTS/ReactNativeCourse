import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, signOut, authState } = useContext(AuthContext)
    const { isLoggedIn } = authState

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>Contacts</Text>

            <TouchableOpacity>
                <Button
                    title={isLoggedIn ? 'Logout' : 'Login'}
                    color={ isLoggedIn ? 'red' : 'blue'}
                    onPress={isLoggedIn ? signOut : signIn}
                />
            </TouchableOpacity>
        </View>
    )
}
