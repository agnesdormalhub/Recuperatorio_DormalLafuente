import {StyleSheet} from 'react-native';

const menuStyle = StyleSheet.create({
    text: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemAnimated: {
        position: 'absolute',
        top: 50,
        width: '100%',
        

    },
    textAnimation: {
        fontWeight: 'bold', 
        fontSize: 40, 
        color:'#7f8662',
        marginStart:10,
        marginBottom:0,
        marginTop:10
        
    },
    animateButton:{

        width:50,
        height:50 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:200,
        right:-25,
        
        
       
    }
})

const importsStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        paddingTop: '10%'
    },
    tarjeta: {
        padding: 10
    },
    textPrincipal: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30

    },
    textSecundario: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
    },
    textTres: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 15
    },
    textButton: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#7f8662', 
        margin: 20,
        color: '#7f8662',
        fontSize: 15
    },
    containerFlatList: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
    },
    containerButton: {
        flex: 1, 
        flexDirection: 'row'
    },
    containerButtonItem: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const contactosStyle = StyleSheet.create({
    textPrincipal: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30
    },
    textSecundario: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        paddingTop: '10%'
    },
    tarjeta: {padding: 10
    },
    itemContactos: {
        justifyContent: 'center',
        alignItems: 'center',  
        height: 320,
        marginTop: 0
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#7f8662', 
        color: '#7f8662',
        fontSize: 15
    },
    containerInput: {
        flex: 2
    },
    itemInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        margin: 20,
        height: 20,    
    },
    containerButtons: {
        flex: 1, 
        flexDirection: 'row',
    },
    itemButton: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
    },
    containerTouchable: {
        flex: 1,
    },
    containerFlatlist: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFilter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTextInput: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    containerTouchable: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    itemTouchable: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },

})

const cardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8662',
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 300,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
    text: {
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 16
    },
    textButton: {
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 200,   
        borderColor: '#f6c9ae', 
        margin: 20,
        color: '#f6c9ae',
        fontSize: 15
    },
    image:{
        width: 150, 
        height: 150,
    }
})

const modalStyle = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end',
    }, 
    modal: {
        height:'70%',
        width:'100%',
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation:20,
        shadowColor:'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'black',
        backgroundColor: '#7f8662'
    }, 
    imagen:{
        width:100,
        height:100
    },
    text: {
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 16
    },
    textButton: {
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 30
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 30,
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#f6c9ae', 
    },
})

const binStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        paddingTop: 10  
    },
    tarjeta: {
        padding: 10
    },
    textPrincipal: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30

    },
    textSecundario: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20

    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerFlatList: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        padding: 20
    },
})

const aboutStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6c9ae'
    },
    containerUs: {
        flex: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    containerNeoNemo: {
        flex: 1
    },
    textPrincipal: {
        fontWeight: 'bold', 
        fontSize: 30, 
        color:'#f6c9ae',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSecundario: {
        fontWeight: 'bold', 
        fontSize: 10, 
        color:'#f6c9ae',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 170, 
        width: 170, 
        borderRadius: 20
    },
    burguerBotton:{
        width:60,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        

    },

    burguerText:{
        fontSize: 30,
        color:'#f6c9ae',
    },

    burguerContainer:{
        position:"absolute",
        right:10,
        top:10,
    },

})

export { cardStyle, modalStyle, menuStyle, importsStyle, contactosStyle, binStyle, aboutStyle}