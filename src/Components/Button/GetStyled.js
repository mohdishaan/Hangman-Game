function styles(styleid){
    const primary_style = "px-4 py-4  border rounded-md  bg-blue-600 hover:bg-blue-900"
    const secondary_style = "px-4 py-4 border rounded-md  bg-red-600 hover:bg-red-900"
    const tertiary_style = "px-4 py-4 border rounded-md  bg-yellow-600 hover:bg-yellow-900"

    if (styleid == 'primary'){
        return primary_style;
    }
    else if(styleid == 'secondary'){
        return secondary_style;
    }
    else if(styleid == 'tertiary'){
        return tertiary_style;
    }
    else{
        return primary_style;
    }
}

export default styles;