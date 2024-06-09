



const fileOps = async () => {

try {

    //const data = await fsPrmises.readFile(path.join(_dirname, 'files', 'first-file.txt'), 'utf8');
    const data = await fsPromises.readFile(path.join(_dirname, 'files', 'lorem.txt'), 'utf8');
    console.log(data);
    await fsPromises.writeFile(path.join(_dirname, 'files', 'file-created-promise.txt'), data);
    await fsPromises.writeFile(path.join(_dirname, 'files', 'file-created-promise.txt'), data); '\nwe are learnng MERN'
    await fsPromises.writeFile(path.join(_dirname, 'files', 'file-created-promise.txt'), data); '\nwe are learnng MERN'

    const newData = await fsPromises.readFile(path.join(_diname,'files', ))


}

catch (err)
{
    console.log(err);
    
}