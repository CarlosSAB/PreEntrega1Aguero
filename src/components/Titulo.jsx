import { Box } from "@mui/material";

const Titulo = ({ message }) => {
  return (
    <>
      <Box
        sx={{

          padding: "15px 20px",
          textAlign: "center"

        }}
      >
        <h5 className="fw-light">{message.subtitle}</h5>
        <h5 className="fw-bold fs-1">{message.title}</h5>
      </Box>
    </>
  );
};

export default Titulo;
