import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

function AddPropertyForm() {
    const [formState, setFormState] = useState({
        propertyName: '',
        floor: '',
        yearBuild: '',
        city: '',
        zipCode: '',
        stateRegion: '',
        country: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <label>Property Name</label>
                <Input
                    name="propertyName"
                    placeholder="Input your property address"
                    value={formState.propertyName}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div>
                <label>Floor</label>
                <Input
                    name="floor"
                    placeholder="Ex: 4"
                    value={formState.floor}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div>
                <label>Year Build</label>
                <Input
                    name="yearBuild"
                    placeholder="Ex: 2008"
                    value={formState.yearBuild}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div>
                <label>City</label>
                <Input
                    name="city"
                    placeholder="Ex: Selangor"
                    value={formState.city}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div>
                <label>ZIP Code</label>
                <Input
                    name="zipCode"
                    placeholder="Input your property address"
                    value={formState.zipCode}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div>
                <label>State/Region</label>
                <select
                    name="stateRegion"
                    value={formState.stateRegion}
                    onChange={handleSelectChange}
                    className="w-full"
                >
                    <option value="">Select your state/region</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                </select>
            </div>
            <div>
                <label>Country</label>
                <select
                    name="country"
                    value={formState.country}
                    onChange={handleSelectChange}
                    className="w-full"
                >
                    <option value="">Select your country</option>
                    <option value="country1">Country 1</option>
                    <option value="country2">Country 2</option>
                </select>
            </div>
            <div className="col-span-2">
                <label>Address</label>
                <Textarea
                    name="address"
                    placeholder="Input your address"
                    value={formState.address}
                    onChange={handleChange}
                    className="w-full"
                    rows={4}
                />
            </div>
        </form>
    );
}

export default AddPropertyForm;
