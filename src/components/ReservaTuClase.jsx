import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  Image,
  Chip,
  Checkbox,
} from "@nextui-org/react";
import { useState } from "react";
import { clasesInfo } from "../data/InfoClases";
import { toast } from "react-toastify";

const initialStateForm = {
  nombre: "",
  apellidos: "",
  correo: "",
  telefono: "",
};

export const ReservaTuClase = (props) => {
  const { isOpen, onOpenChange } = props;
  const [claseSelected, setClaseSelected] = useState(null);
  const [isCheck, setIsCheck] = useState(false);
  const [selectedDiaHora, setSelectedDiaHora] = useState({
    dia: null,
    hora: null,
  });
  const [formData, setFormData] = useState(initialStateForm);

  const handleOnSelected = ({ target: { value } }) => {
    const data = clasesInfo.find((clase) => clase.id === parseInt(value));
    setClaseSelected(data);
  };

  const handleOnChangeForm = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = () => {
    if (isCheck) {
      if (
        formData.nombre &&
        formData.apellidos &&
        formData.correo &&
        formData.telefono &&
        claseSelected &&
        selectedDiaHora.dia &&
        selectedDiaHora.hora
      ) {
        const url = `https://wa.me/4495484212?text=${encodeURIComponent(
          `Nombre: ${formData.nombre} ${formData.apellidos}\n` +
            `Correo: ${formData.correo}\n` +
            `Teléfono: ${formData.telefono}\n` +
            `Clase: ${claseSelected.nombre}\n` +
            `Día: ${selectedDiaHora.dia}\n` +
            `Hora: ${selectedDiaHora.hora}`
        )}`;
        window.open(url, "_blank");
        setFormData(initialStateForm);
        setClaseSelected(null);
        setSelectedDiaHora({ dia: null, hora: null });
        onOpenChange();
      } else {
        alert("Faltan campos por llenar");
      }
    } else {
      toast.error("Debes aceptar los términos y condiciones");
    }
  };

  const handleChipSelect = (dia, hora) => {
    setSelectedDiaHora({ dia, hora });
  };

  const handleOnCheck = ({ target: { checked } }) => {
    setIsCheck(checked);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          <ModalHeader className="flex justify-center">
            Reserva tu clase
          </ModalHeader>
          <ModalBody>
            <div>
              <div className="flex gap-2">
                <Input
                  type="text"
                  variant="bordered"
                  label="Nombre/s"
                  name="nombre"
                  onChange={handleOnChangeForm}
                />
                <Input
                  type="text"
                  variant="bordered"
                  label="Apellidos"
                  name="apellidos"
                  onChange={handleOnChangeForm}
                />
              </div>
              <div className="flex gap-2 mt-5">
                <Input
                  name="correo"
                  className="flex-grow"
                  type="email"
                  variant="bordered"
                  label="Correo electronico"
                  onChange={handleOnChangeForm}
                />
                <Input
                  name="telefono"
                  type="number"
                  variant="bordered"
                  label="Telefono"
                  maxLength={10}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="w-3/6"
                  onChange={handleOnChangeForm}
                />
              </div>
              <div className="mt-5">
                <Select
                  variant="bordered"
                  label="Selecciona tu clase"
                  className="w-full"
                  onChange={handleOnSelected}
                >
                  {clasesInfo.map((clase) => (
                    <SelectItem key={clase.id} value={clase.id}>
                      {clase.nombre}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full mt-10">
                <Card
                  className={
                    claseSelected !== null
                      ? claseSelected !== undefined
                        ? "block"
                        : "hidden"
                      : "hidden"
                  }
                >
                  <CardHeader className="flex justify-center flex-col">
                    <span className="text-[150%] font-bold">
                      {claseSelected?.nombre}
                    </span>
                    <span className="text-[100%] font-normal">
                      {claseSelected?.descripcion}
                    </span>
                  </CardHeader>
                  <CardBody>
                    <div className="flex flex-row">
                      <div className="mr-5 mb-5">
                        <Image src={claseSelected?.img} width={150} />
                      </div>
                      <div>
                        <span className="text-[100%] font-bold">Horarios</span>
                        {claseSelected?.horario.map((horario) => (
                          <div key={horario.turno}>
                            <span className="text-[85%] font-bold ">
                              {horario.turno}
                            </span>
                            <div className="flex flex-row flex-wrap gap-2 mt-2">
                              {horario.dias.map((dia) => (
                                <Chip
                                  key={dia.dia + dia.hora}
                                  className="cursor-pointer"
                                  color={
                                    selectedDiaHora.dia === dia.dia &&
                                    selectedDiaHora.hora === dia.hora
                                      ? "success"
                                      : "primary"
                                  }
                                  size="sm"
                                  style={{
                                    color:
                                      selectedDiaHora.dia === dia.dia &&
                                      selectedDiaHora.hora === dia.hora
                                        ? "white"
                                        : "black",
                                  }}
                                  onClick={() =>
                                    handleChipSelect(dia.dia, dia.hora)
                                  }
                                >
                                  {`${dia.dia} - ${dia.hora}`}
                                </Chip>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="flex gap-3 mt-10">
                <Checkbox onChange={handleOnCheck} checked={isCheck} />
                <span className="text-[85%]">
                  Doy fe de que me encuentro en condiciones de salud óptimas
                  para realizar los ejercicios de clase, asimismo asumo la
                  responsabilidad y riesgo de cualquier lesión derivada de las
                  actividades mencionadas.
                </span>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="ghost" onPress={handleOnSubmit}>
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
