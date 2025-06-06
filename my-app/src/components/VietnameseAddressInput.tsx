import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const vietnameseAddressData = {
    "Hà Nội": [
        "Phường Láng Thượng",
        "Phường Láng Hạ",
        "Phường Thành Công",
        "Phường Kim Mã",
        "Phường Giảng Võ",
        "Phường Cát Linh",
        "Phường Quán Thánh",
        "Phường Ngọc Hà",
        "Phường Điện Biên",
        "Phường Đội Cấn",
        "Phường Liễu Giai",
        "Phường Ba Đình",
        "Phường Trúc Bạch",
        "Phường Vĩnh Phúc",
        "Phường Cống Vị",
        "Phường Nguyễn Trung Trực",
    ],
    "TP Hồ Chí Minh": [
        "Phường Bến Nghé",
        "Phường Bến Thành",
        "Phường Cầu Kho",
        "Phường Cầu Ông Lãnh",
        "Phường Cô Giang",
        "Phường Đa Kao",
        "Phường Nguyễn Cư Trinh",
        "Phường Nguyễn Thái Bình",
        "Phường Phạm Ngũ Lão",
        "Phường Tân Định",
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
    ],
    "Đà Nẵng": [
        "Phường Thanh Bình",
        "Phường Thuận Phước",
        "Phường Thạch Thang",
        "Phường Hải Châu I",
        "Phường Hải Châu II",
        "Phường Phước Ninh",
        "Phường Hòa Thuận Tây",
        "Phường Hòa Thuận Đông",
        "Phường Tam Thuận",
        "Phường Thanh Khê Tây",
        "Phường Thanh Khê Đông",
        "Phường Xuân Hà",
        "Phường Tân Chính",
        "Phường Khê Trung",
        "Phường Chính Gián",
        "Phường Vĩnh Trung",
    ],
    "Hải Phòng": [
        "Phường Lê Chân",
        "Phường Cát Dài",
        "Phường An Biên",
        "Phường Lam Sơn",
        "Phường An Dương",
        "Phường Trại Cau",
        "Phường Đông Khê",
        "Phường Niệm Nghĩa",
        "Phường Minh Khai",
        "Phường Vĩnh Niệm",
        "Phường Máy Chai",
        "Phường Máy Tơ",
        "Phường Cầu Tre",
        "Phường Cầu Đất",
        "Phường Hoàng Văn Thụ",
        "Phường Phan Bội Châu",
    ],
    "Cần Thơ": [
        "Phường Cái Khế",
        "Phường Thới Bình",
        "Phường Bùi Hữu Nghĩa",
        "Phường Long Hòa",
        "Phường Lê Bình",
        "Phường Tân An",
        "Phường An Hòa",
        "Phường An Cư",
        "Phường An Nghiệp",
        "Phường An Phú",
        "Phường Xuân Khánh",
        "Phường Hưng Lợi",
        "Phường An Khánh",
        "Phường Thới Hòa",
        "Phường Phước Thới",
        "Phường Trường Lạc",
    ],
};

export interface VietnameseAddressValue {
    province: string;
    ward: string;
    street: string;
    fullAddress: string;
}

interface VietnameseAddressInputProps {
    value?: VietnameseAddressValue;
    onChange: (value: VietnameseAddressValue) => void;
    label?: string;
    required?: boolean;
}

export const VietnameseAddressInput: React.FC<VietnameseAddressInputProps> = ({
    value = { province: "", ward: "", street: "", fullAddress: "" },
    onChange,
    label = "Địa chỉ",
    required = false,
}) => {
    const [province, setProvince] = useState(value.province);
    const [ward, setWard] = useState(value.ward);
    const [street, setStreet] = useState(value.street);
    const [availableWards, setAvailableWards] = useState<string[]>([]);

    // Update available wards when province changes
    useEffect(() => {
        if (
            province &&
            vietnameseAddressData[
                province as keyof typeof vietnameseAddressData
            ]
        ) {
            setAvailableWards(
                vietnameseAddressData[
                    province as keyof typeof vietnameseAddressData
                ]
            );
            // Reset ward if it's not available in the new province
            if (
                ward &&
                !vietnameseAddressData[
                    province as keyof typeof vietnameseAddressData
                ].includes(ward)
            ) {
                setWard("");
            }
        } else {
            setAvailableWards([]);
            setWard("");
        }
    }, [province, ward]);

    // Update full address and notify parent whenever any field changes
    useEffect(() => {
        const fullAddress = [street, ward, province].filter(Boolean).join(", ");
        const newValue: VietnameseAddressValue = {
            province,
            ward,
            street,
            fullAddress,
        };

        // Only update if the value has actually changed
        if (JSON.stringify(newValue) !== JSON.stringify(value)) {
            onChange(newValue);
        }
    }, [province, ward, street, onChange, value]);

    const handleProvinceChange = (newProvince: string) => {
        setProvince(newProvince);
        setWard(""); // Reset ward when province changes
    };

    const handleWardChange = (newWard: string) => {
        setWard(newWard);
    };

    const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(e.target.value);
    };

    return (
        <div className="space-y-3">
            <Label className="text-sm font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>

            <div>
                <Label
                    htmlFor="province"
                    className="text-xs text-muted-foreground mb-1 block"
                >
                    Province/City
                </Label>
                <Select value={province} onValueChange={handleProvinceChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select province/city" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(vietnameseAddressData).map(
                            (provinceName) => (
                                <SelectItem
                                    key={provinceName}
                                    value={provinceName}
                                >
                                    {provinceName}
                                </SelectItem>
                            )
                        )}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label
                    htmlFor="ward"
                    className="text-xs text-muted-foreground mb-1 block"
                >
                    Ward
                </Label>
                <Select
                    value={ward}
                    onValueChange={handleWardChange}
                    disabled={!province || availableWards.length === 0}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select ward" />
                    </SelectTrigger>
                    <SelectContent>
                        {availableWards.map((wardName) => (
                            <SelectItem key={wardName} value={wardName}>
                                {wardName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label
                    htmlFor="street"
                    className="text-xs text-muted-foreground mb-1 block"
                >
                    Street Address
                </Label>
                <Input
                    id="street"
                    type="text"
                    value={street}
                    onChange={handleStreetChange}
                    placeholder="Enter your street address"
                    className="w-full"
                />
            </div>

            {(province || ward || street) && (
                <div className="mt-2 p-2 bg-muted rounded-md">
                    <Label className="text-xs text-muted-foreground">
                        Full address:
                    </Label>
                    <p className="text-sm font-medium mt-1">
                        {[street, ward, province].filter(Boolean).join(", ") ||
                            "The information is incomplete"}
                    </p>
                </div>
            )}
        </div>
    );
};
